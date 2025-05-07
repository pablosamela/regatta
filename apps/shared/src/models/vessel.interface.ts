export interface IVessel {
    id: number;
    idVesselClass: number;
    idVesselCategory: number;
    idVesselBuilder: number;
    idVesselArchitect: number;
    idVesselCountry: number;
    name: string;
    yearOfBuilt: Date;
    lengthOverall: number;
    lengthWaterline: number;
    beam: number;
    draft: number;
    keel: number;
    deck: number;
    weight: number;
    displacement: number;
    ballast: number;
    rigging: number;
    hull: number;
    hullMaterial: string;
    hullColor: string;
    hullNumber: number;
    engine: string;
    fuelType: string;
    sailNumber: number;
    rating: number;
}
