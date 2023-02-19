/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { apiUrl } from "../../config/api";
import { AdEntity } from "types";

interface Props {
  id: string;
}

export const SingleAd = (props: Props) => {
  const [ad, setAd] = useState<AdEntity | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/ad/${props.id}`);
      const data = await res.json();
      setAd(data);
    })();
  }, []);

  if (ad === null) {
    return <p>Wczytywanie...</p>;
  }

  return (
    <>
      <h2>{ad.name}</h2>
      <p>{ad.description}</p>
      {!!ad.price && (
        <p>
          <b>{ad.price} zł</b>
        </p>
      )}
      <hr />
      <a href={ad.url} target="_blank" rel="noreferrer">
        Otwórz ogłoszenie
      </a>
    </>
  );
};
