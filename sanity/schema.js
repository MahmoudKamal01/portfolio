import { pageInfo} from './schemaTypes/pageInfo'
import { social} from './schemaTypes/social'
import {project} from './schemaTypes/project'
import { experience} from './schemaTypes/experience'
import { skill } from './schemaTypes/skill';

export const schema = {
  types: [skill, experience, social, pageInfo,project],
}
