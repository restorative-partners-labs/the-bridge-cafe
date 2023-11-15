import { blockContent } from './schemas/blockContent'
import { teamMember } from './schemas/teamMember'
import { special } from './schemas/special'

export const schema = {
  types: [teamMember, blockContent, special],
}
