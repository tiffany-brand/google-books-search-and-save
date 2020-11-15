// parses needed book information from Google Books response
export default function parseBooks(searchResults) {
    let parsedBook = {
        id: "",
        title: "",
        authors: [],
        description: "",
        image: "",
        link: ""
    }

    return searchResults.map(book => {
        parsedBook = {
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }
        return parsedBook
    })
}