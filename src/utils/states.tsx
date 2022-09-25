import { useState, useEffect } from "react";

/// Fonction de fetch des données de logements
export const fetchHousing = async (): Promise<Housing[]> => {
  const data = await fetch("/logements.json");
  const response = await data.json();

  return response;
};

/// Fonction de récupération et de mise à jour des données
export const useHousings = () => {
  const [housings, setHousings] = useState<Housing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /// On fetch les données
    fetchHousing()
      /// On met à jour les "housings",
      .then(setHousings)
      /// On change la valeur de "isLoading"
      .finally(() => setIsLoading(false));
  }, []);

  return { housings, isLoading };
};

export type Housing = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};
