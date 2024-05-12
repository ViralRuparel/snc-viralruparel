import { useState, useCallback, useRef } from "react";
import { Person, User } from "@/utils/common/person";
import { fetchPersonDetails } from "@/services/personService";

interface UsePersonDataReturn {
  selectedPerson: Person | null;
  personData: User | null;
  loading: boolean;
  error: string | null;
  fetchPersonData: (person: Person) => void;
}

export const usePersonData = (): UsePersonDataReturn => {
  const [selectedPerson, setSelectedPersonData] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [personData, setPersonData] = useState<User | null>(null);
  const abortController = useRef<AbortController | null>(null);
  const fetchPersonData = useCallback(async (person: Person): Promise<void> => {
    setSelectedPersonData(person);

    if (abortController.current) {
      abortController.current.abort();
    }
    abortController.current = new AbortController();

    setLoading(true);
    setError(null);
    setPersonData(null);
    try {
      const data = await fetchPersonDetails(
        person,
        abortController.current.signal,
      );
      setPersonData(data);
      setLoading(false);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setError(err.message);
        setPersonData(null);
        setLoading(false);
      }
    }
  }, []);

  return { selectedPerson, personData, loading, error, fetchPersonData };
};
