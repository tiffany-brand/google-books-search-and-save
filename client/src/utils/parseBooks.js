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
        let id = book.id ? book.id + book.etag : "";
        let title = book.volumeInfo.title ? book.volumeInfo.title : "";
        let authors = book.volumeInfo.authors ? book.volumeInfo.authors : [];
        let description = book.volumeInfo.description ? book.volumeInfo.description : "";
        let image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";
        let link = book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "";
        parsedBook = {
            id,
            title,
            authors,
            description,
            image,
            link
        }
        return parsedBook
    })
}