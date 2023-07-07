import { getAllDrafts } from "@/utils/api";
import { Draft } from "pokedraft-types";
import { useEffect, useState } from "react";

export default function DraftsPage() {
  const [drafts, setDrafts] = useState<Draft[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setDrafts(await getAllDrafts());
    };

    fetchData();
  }, [setDrafts]);

  return (
    <div>
      <ul>
        {drafts.map((draft) => (
          <li key={draft.draftId}>
            Draft with ID={draft.draftId} and Name={draft.draftName}
          </li>
        ))}
      </ul>
    </div>
  );
}
