import { blockContent } from './schemas/blockContent'
import { category } from './schemas/category'
import { post } from './schemas/post'
import { author } from './schemas/teamMember'
import { special } from './schemas/special'

export const schema = {
  types: [post, author, category, blockContent, special],
}
