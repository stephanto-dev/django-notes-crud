import {useState, useEffect} from "react";
import api from "../api";
import Note from "../components/Note";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const [notes, setNotes] = useState<any[]>([]);
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then((data) =>{ setNotes(data); console.log(data)})
            .catch((err) => console.log(err))
    }

    const deleteNote = (id: number) => {
        api.delete(`/api/notes/delete/${id}/`).then( (res) => {
            if(res.status === 204){
                alert("Note deleted");
                getNotes();
            }else{
                alert("Error deleting note");
            }
        }).catch((err) => console.log(err));
    }

    const createNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post("/api/notes/", {
            content,
            title
        }).then((res) => {
            if(res.status === 201){
                alert("Note created");
                getNotes();
                setContent("");
                setTitle("");
            }else{
                alert("Error creating note");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Notes</h2>
                    <button
                        onClick={() => navigate('/logout')}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-100"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {notes.map((note) => (
                        <div className="w-full" key={note.id}>
                            <Note note={note} onDelete={deleteNote}/>
                        </div>
                    ))}
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-8 max-w-xl mx-auto border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Create a Note</h2>
                    <form onSubmit={createNote} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <input 
                                type="text" 
                                id="title" 
                                required 
                                value={title} 
                                name="title" 
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                                placeholder="Enter note title"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                                Content
                            </label>
                            <textarea 
                                id="content" 
                                value={content} 
                                required 
                                name="content" 
                                onChange={(e) => setContent(e.target.value)}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                                placeholder="Write your note content here"
                            />
                        </div>
                        
                        <button 
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium"
                        >
                            Create Note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;