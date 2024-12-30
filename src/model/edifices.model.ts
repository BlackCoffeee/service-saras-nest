export class EdificeResponse {
    id: string;
    buildingName: string;
    buildingDesc?: string;
    buildingAddress?: string;
    buildingStatus: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export class CreateEdificeRequest {
    buildingName: string;
    buildingDesc?: string;
    buildingAddress?: string;
}
