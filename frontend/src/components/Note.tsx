function Note({note, onDelete}:any){
    const formattedDate = new Date(note.created_at).toLocaleDateString("pt-BR")

    return(
        <div className="bg-white rounded-xl shadow-sm p-6 mb-4 hover:shadow-md transition-all duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{note.title}</h3>
            <p className="text-gray-600 mb-6 whitespace-pre-wrap leading-relaxed">{note.content}</p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-400">{formattedDate}</span>
                <button 
                    onClick={() => onDelete(note.id)}
                    className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-100"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Note;