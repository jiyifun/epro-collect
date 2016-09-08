
export const headline = ({ headline }) => headline.headline
export const activeTab = ({headline}) => headline.activeTab

export const cariesList = ({ tooth }) => tooth.cariesList
export const brokenList = ({ tooth }) => tooth.brokenList
export const currentTeeth = ({tooth}) => tooth.currentTeeth
export const currentBlock = ({tooth}) => tooth.currentBlock

export const brushCount = ({questionnaire}) => questionnaire.brushCount
export const isBled = ({questionnaire}) => questionnaire.isBled
export const isLoosen = ({questionnaire}) => questionnaire.isLoosen
export const isCleaned = ({questionnaire}) => questionnaire.isCleaned
export const isUnwell = ({questionnaire}) => questionnaire.isUnwell

export const lower = ({toothPic}) => toothPic.lower
export const upper = ({toothPic}) => toothPic.upper

export const userId = ({user}) => user.user_id
