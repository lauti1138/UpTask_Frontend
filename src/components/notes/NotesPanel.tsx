import { Task } from "@/types/index";
import AddNoteForm from "./AddNoteForm";
import NoteDetail from "./NoteDetail";

type NotePanelsProps = {
    notes: Task['notes']
}

export default function NotesPanel({notes} : NotePanelsProps) {
  return (
    <>
        <AddNoteForm />
        <div className="divide-y divide-gray-100 mt-10">
            {notes.length ? (
                <>
                    <p className="font-bold text-2xl text-slate-600 my-5">Notas:</p>
                    {notes.map(note => <NoteDetail key={note._id} note={note} />)}
                </>
            ) : <p className="text-gray-500 text-cencer pt-3">No hay notas</p>}
        </div>
    </>
  )
}
