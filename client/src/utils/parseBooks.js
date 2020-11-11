export default function parseBooks(searchResults) {
    let parsedBook = {
        title: "",
        authors: [],
        description: "",
        image: "",
        link: ""
    }

    return searchResults.map(book => {
        parsedBook = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }
        return parsedBook
    })
}