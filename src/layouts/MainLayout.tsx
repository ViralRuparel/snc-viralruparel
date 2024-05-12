import { FunctionComponent, PropsWithChildren, useContext } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Skeleton } from "@/components/Skeleton";
import { ErrorMessage } from "@/components/Error";
import { PersonCard } from "@/components/PersonCard";
import { DateTime } from "@/components/DateTime";
import { Person } from "@/utils/common/person";
import { usePersonData } from "@/hooks/usePersonData";
import { LogContext } from "@/context/LogContext";
import { useLogPersonDetails } from "@/hooks/useLogPersonDetails";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const { enableLogs, toggleLogs } = useContext(LogContext);
  const { selectedPerson, personData, loading, error, fetchPersonData } =
    usePersonData();

  const handleButtonClick = (person: Person): void => {
    fetchPersonData(person);
  };

  useLogPersonDetails(personData);

  return (
    <>
      <button onClick={toggleLogs}>
        {enableLogs ? "Disable Logs" : "Enable Logs"}
      </button>
      <DateTime />
      <main
        className={classNames(
          inter.className,
          "h-screen w-screen",
          "flex flex-col justify-center items-center",
        )}
      >
        <div className={classNames("flex gap-2")}>
          {Object.values(Person).map((person) => (
            <Button
              key={person}
              onClick={() => handleButtonClick(person)}
              className={
                selectedPerson === person
                  ? "bg-blue-500 text-white px-2 py-1 border border-black"
                  : "bg-gray-200 px-2 py-1 border border-black"
              }
            >
              {person}
            </Button>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          {loading && <Skeleton />}
          {error && <ErrorMessage message={error} />}
          {personData && <PersonCard person={personData} />}
        </div>
      </main>
    </>
  );
};
