export type Root = Root2[]

export interface Root2 {
  awayTeam: AwayTeam
  behindClosedDoors: boolean
  competition: Competition
  fullTimeAt?: string
  group?: Group
  homeTeam: HomeTeam
  id: string
  kickOffTime: KickOffTime
  lineupStatus: string
  matchAttendance?: number
  matchNumber: number
  matchday: Matchday
  playerEvents?: PlayerEvents
  playerOfTheMatch?: PlayerOfTheMatch
  referees: Referee[]
  round: Round
  score?: Score
  seasonYear: string
  sessionNumber: number
  stadium: Stadium
  status: string
  type: string
  winner?: Winner
}

export interface AwayTeam {
  associationId?: string
  associationLogoUrl?: string
  bigLogoUrl: string
  confederationType?: string
  countryCode?: string
  id: string
  idProvider: string
  internationalName: string
  isPlaceHolder: boolean
  logoUrl: string
  mediumLogoUrl: string
  organizationId?: string
  teamCode: string
  teamTypeDetail: string
  translations: Translations
  typeIsNational: boolean
  typeTeam: string
}

export interface Translations {
  countryName?: CountryName
  displayName: DisplayName
  displayOfficialName: DisplayOfficialName
  displayTeamCode: DisplayTeamCode
}

export interface CountryName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayOfficialName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayTeamCode {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Competition {
  age: string
  code: string
  id: string
  images: Images
  metaData: MetaData
  region: string
  sex: string
  sportsType: string
  teamCategory: string
  translations: Translations2
  type: string
}

export interface Images {
  FULL_LOGO: string
}

export interface MetaData {
  name: string
}

export interface Translations2 {
  name: Name
  prequalifyingName: PrequalifyingName
  qualifyingName: QualifyingName
  tournamentName: TournamentName
}

export interface Name {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface PrequalifyingName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface QualifyingName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface TournamentName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Group {
  competitionId: string
  id: string
  metaData: MetaData2
  order: number
  phase: string
  roundId: string
  seasonYear: string
  teams: string[]
  teamsQualifiedNumber: number
  translations: Translations3
  type: string
}

export interface MetaData2 {
  groupName: string
  groupShortName: string
}

export interface Translations3 {
  name: Name2
  shortName: ShortName
}

export interface Name2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface ShortName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface HomeTeam {
  associationId?: string
  associationLogoUrl?: string
  bigLogoUrl: string
  confederationType?: string
  countryCode?: string
  id: string
  idProvider: string
  internationalName: string
  isPlaceHolder: boolean
  logoUrl: string
  mediumLogoUrl: string
  organizationId?: string
  teamCode: string
  teamTypeDetail: string
  translations: Translations4
  typeIsNational: boolean
  typeTeam: string
}

export interface Translations4 {
  countryName?: CountryName2
  displayName: DisplayName2
  displayOfficialName: DisplayOfficialName2
  displayTeamCode: DisplayTeamCode2
}

export interface CountryName2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayName2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayOfficialName2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayTeamCode2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface KickOffTime {
  date: string
  dateTime: string
  utcOffsetInHours: number
}

export interface Matchday {
  competitionId: string
  dateFrom: string
  dateTo: string
  format: string
  id: string
  longName: string
  name: string
  roundId: string
  seasonYear: string
  sequenceNumber: string
  translations: Translations5
  type: string
}

export interface Translations5 {
  longName: LongName
  name: Name3
}

export interface LongName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Name3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface PlayerEvents {
  redCards?: RedCard[]
  scorers: Scorer[]
  penaltiesMissed?: PenaltiesMissed[]
}

export interface RedCard {
  id: string
  images: Images2
  phase: string
  player: Player
  teamId: string
  teamIdProvider: string
  time: Time
}

export interface Images2 {
  PLAYER_CELEBRATING: string
}

export interface Player {
  age: string
  birthDate: string
  clubId: string
  clubJerseyNumber: string
  clubShirtName: string
  countryCode: string
  fieldPosition: string
  gender: string
  id: string
  imageUrl: string
  internationalName: string
  nationalFieldPosition: string
  nationalJerseyNumber: string
  nationalShirtName: string
  nationalTeamId: string
  translations: Translations6
}

export interface Translations6 {
  countryName: CountryName3
  fieldPosition: FieldPosition
  firstName: FirstName
  lastName: LastName
  name: Name4
  nationalFieldPosition: NationalFieldPosition
  shortName: ShortName2
}

export interface CountryName3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FieldPosition {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FirstName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface LastName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Name4 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface NationalFieldPosition {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface ShortName2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Time {
  minute: number
  second: number
}

export interface Scorer {
  goalType: string
  id: string
  images: Images3
  phase: string
  player: Player2
  teamId: string
  teamIdProvider: string
  time: Time2
}

export interface Images3 {
  PLAYER_CELEBRATING: string
}

export interface Player2 {
  age: string
  birthDate: string
  clubId: string
  clubJerseyNumber?: string
  clubShirtName: string
  countryCode: string
  countryOfBirthCode?: string
  detailedFieldPosition?: string
  fieldPosition: string
  gender: string
  id: string
  imageUrl: string
  internationalName: string
  nationalFieldPosition: string
  nationalJerseyNumber: string
  nationalShirtName: string
  nationalTeamId: string
  translations: Translations7
  height?: number
  weight?: number
}

export interface Translations7 {
  countryName: CountryName4
  countryOfBirthName?: CountryOfBirthName
  fieldPosition: FieldPosition2
  firstName?: FirstName2
  lastName: LastName2
  name: Name5
  nationalFieldPosition: NationalFieldPosition2
  shortName: ShortName3
}

export interface CountryName4 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface CountryOfBirthName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FieldPosition2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FirstName2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH?: string
  TR?: string
  HU?: string
  CS?: string
  NL?: string
}

export interface LastName2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Name5 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface NationalFieldPosition2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface ShortName3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Time2 {
  minute: number
  second: number
  injuryMinute?: number
}

export interface PenaltiesMissed {
  id: string
  images: Images4
  penaltyType: string
  phase: string
  player: Player3
  teamId: string
  teamIdProvider: string
  time: Time3
}

export interface Images4 {
  PLAYER_CELEBRATING: string
}

export interface Player3 {
  age: string
  birthDate: string
  clubId: string
  clubJerseyNumber: string
  clubShirtName: string
  countryCode: string
  countryOfBirthCode: string
  detailedFieldPosition: string
  fieldPosition: string
  gender: string
  id: string
  imageUrl: string
  internationalName: string
  nationalFieldPosition: string
  nationalJerseyNumber: string
  nationalShirtName: string
  nationalTeamId: string
  translations: Translations8
}

export interface Translations8 {
  countryName: CountryName5
  countryOfBirthName: CountryOfBirthName2
  fieldPosition: FieldPosition3
  firstName: FirstName3
  lastName: LastName3
  name: Name6
  nationalFieldPosition: NationalFieldPosition3
  shortName: ShortName4
}

export interface CountryName5 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface CountryOfBirthName2 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FieldPosition3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FirstName3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface LastName3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Name6 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface NationalFieldPosition3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface ShortName4 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Time3 {
  minute: number
  second: number
}

export interface PlayerOfTheMatch {
  player: Player4
  teamId: string
}

export interface Player4 {
  age: string
  birthDate: string
  clubId: string
  clubJerseyNumber: string
  clubShirtName: string
  countryCode: string
  countryOfBirthCode?: string
  detailedFieldPosition: string
  fieldPosition: string
  gender: string
  id: string
  imageUrl: string
  internationalName: string
  nationalFieldPosition: string
  nationalJerseyNumber: string
  nationalShirtName: string
  nationalTeamId: string
  translations: Translations9
  height?: number
  weight?: number
}

export interface Translations9 {
  countryName: CountryName6
  countryOfBirthName?: CountryOfBirthName3
  fieldPosition: FieldPosition4
  firstName?: FirstName4
  lastName: LastName4
  name: Name7
  nationalFieldPosition: NationalFieldPosition4
  shortName: ShortName5
}

export interface CountryName6 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface CountryOfBirthName3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FieldPosition4 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FirstName4 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface LastName4 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Name7 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface NationalFieldPosition4 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface ShortName5 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Referee {
  images: Images5
  person: Person
  role: string
  translations: Translations11
}

export interface Images5 {
  SMALL_SQUARE: string
}

export interface Person {
  countryCode?: string
  gender: string
  id: string
  translations: Translations10
}

export interface Translations10 {
  countryName?: CountryName7
  firstName: FirstName5
  lastName: LastName5
  name: Name8
  shortName: ShortName6
}

export interface CountryName7 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface FirstName5 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface LastName5 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Name8 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface ShortName6 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Translations11 {
  roleName: RoleName
}

export interface RoleName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Round {
  active: boolean
  benchGKCount: number
  benchPlayersCount: number
  benchStaffCount: number
  coefficientWinnerBonus: number
  competitionId: string
  dateFrom: string
  dateTo: string
  fieldPlayersCount: number
  groupCount: number
  id: string
  metaData: MetaData3
  mode: string
  modeDetail: string
  orderInCompetition: number
  phase: string
  seasonYear: string
  secondaryType?: string
  stadiumNameType: string
  status: string
  substitutionCount: number
  teamCount: number
  teams: string[]
  translations: Translations12
}

export interface MetaData3 {
  name: string
  type: string
}

export interface Translations12 {
  abbreviation: Abbreviation
  name: Name9
  shortName: ShortName7
}

export interface Abbreviation {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Name9 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface ShortName7 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Score {
  regular: Regular
  total: Total
}

export interface Regular {
  away: number
  home: number
}

export interface Total {
  away: number
  home: number
}

export interface Stadium {
  address: string
  capacity: number
  city: City
  countryCode: string
  geolocation: Geolocation
  id: string
  images: Images6
  openingDate: string
  pitch: Pitch
  translations: Translations14
}

export interface City {
  countryCode: string
  id: string
  translations: Translations13
}

export interface Translations13 {
  name: Name10
}

export interface Name10 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Geolocation {
  latitude: number
  longitude: number
}

export interface Images6 {
  MEDIUM_WIDE: string
  LARGE_ULTRA_WIDE: string
}

export interface Pitch {
  length: number
  width: number
}

export interface Translations14 {
  mediaName: MediaName
  name: Name11
  officialName: OfficialName
  specialEventsName: SpecialEventsName
  sponsorName: SponsorName
}

export interface MediaName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Name11 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface OfficialName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface SpecialEventsName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface SponsorName {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface Winner {
  match: Match
}

export interface Match {
  reason: string
  team: Team
}

export interface Team {
  associationId: string
  associationLogoUrl: string
  bigLogoUrl: string
  confederationType: string
  countryCode: string
  id: string
  idProvider: string
  internationalName: string
  isPlaceHolder: boolean
  logoUrl: string
  mediumLogoUrl: string
  organizationId: string
  teamCode: string
  teamTypeDetail: string
  translations: Translations15
  typeIsNational: boolean
  typeTeam: string
}

export interface Translations15 {
  countryName: CountryName8
  displayName: DisplayName3
  displayOfficialName: DisplayOfficialName3
  displayTeamCode: DisplayTeamCode3
}

export interface CountryName8 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayName3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayOfficialName3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}

export interface DisplayTeamCode3 {
  EN: string
  FR: string
  DE: string
  ES: string
  PT: string
  IT: string
  RU: string
  ZH: string
  TR: string
  HU: string
  CS: string
  NL: string
}
