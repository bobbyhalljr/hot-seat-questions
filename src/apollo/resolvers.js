export const resolvers = {
    Query: {
        posts(_parent, _args, _context, _info){
            return {
                id: 1,
                question: 'How to reverse a linked list',
                description: 'this was my first interview ever!',
                language: 'JavaScript',
                author: {
                    id: 1,
                    name: 'Bobby Hall Jr',
                    jobTitle: 'Full Stack Web Developer'
                }
            }
        }
    }
}