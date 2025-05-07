export interface IRegatta{
    id: number;
    number: number; 
    eventDate: Date;
    eventHour: Date;
    positionSerie: number;
    positionGeneral: number;
    startTime: Date;
    finishTime: Date;
    realTime: Date;
    correctedTime: Date;
    points: number;
    seriePosition: string;
    generalPosition: number;
    idInstitutionOrganizer: number;
    idType: number;
    idEvent: number;
    idSerie: number;
    idStatus: number;
    idVessel: number;
}