// Generated by https://quicktype.io

import { CustomReaction, ReactionUsage, Team, User } from '../../../common';

export interface Me {
    updateMessage: null;
    user: User;
    teams: Team[];
    customReactions: CustomReaction[];
    reactionUsages: ReactionUsage[];
    landingUrl: boolean;
}
