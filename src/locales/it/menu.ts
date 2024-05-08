import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  cancel: "Annulla",
  continue: "Continua",
  newGame: "Nuova Partita",
  loadGame: "Carica Partita",
  dailyRun: "Corsa Giornaliera (Beta)",
  selectGameMode: "Seleziona una modalità di gioco.",
  logInOrCreateAccount:
    "Accedi o crea un nuovo account per iniziare. Non è richiesta un'email!",
  username: "Nome Utente",
  password: "Password",
  login: "Accedi",
  register: "Registrati",
  emptyUsername: "Nome utente mancante!",
  invalidLoginUsername: "Nome utente non valido!",
  invalidRegisterUsername:
    "Il nome utente può contenere solo lettere, numeri o trattini bassi",
  invalidLoginPassword: "Password non valida!",
  invalidRegisterPassword: "La password deve contenere almeno 6 caratteri",
  usernameAlreadyUsed: "Il nome utente inserito è stato già utilizzato!",
  accountNonExistent: "Account inesistente!",
  unmatchingPassword: "La password inserita non è corretta!",
  passwordNotMatchingConfirmPassword:
    "La password deve essere uguale alla conferma password!",
  confirmPassword: "Conferma Password",
  registrationAgeWarning: "Registrandoti confermi di avere 13 anni o più.",
  backToLogin: "Torna all'accesso",
  failedToLoadSaveData:
    "Impossibile caricare i dati di salvataggio. Ricarica la pagina.\nSe il problema persiste, contatta l'amministratore.",
  sessionSuccess: "Sessione caricata correttamente.",
  failedToLoadSession:
    "Impossibile caricare i dati della sessione.\nPotrebbero essere danneggiati.",
  boyOrGirl: "Sei un ragazzo o una ragazza?",
  boy: "Ragazzo",
  girl: "Ragazza",
  dailyRankings: "Classifica Giornaliera",
  weeklyRankings: "Classifica Settimanale",
  noRankings: "Nessuna Classifica",
  loading: "Caricamento…",
  playersOnline: "Giocatori Online",
  empty: "Vuoto",
  yes: "Si",
  no: "No",
} as const;
