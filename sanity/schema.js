import { blockContent } from './schemas/blockContent'
import { teamMember } from './schemas/teamMember'
import { special } from './schemas/special'
import { specialMenu } from './schemas/specialMenu'
import { menuPhotos } from './schemas/menuPhotos'

export const schema = {
  types: [teamMember, blockContent, special, specialMenu, menuPhotos],
}
