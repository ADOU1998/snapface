// Les propiétés de la classe FaceSnap = Table
export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    location?: string;
}