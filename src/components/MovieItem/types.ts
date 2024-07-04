export interface IMovieItemProps {
    name: string;
    poster: string;
    description: string;
    year: number;
    ageRating: number;
    enName: string;
    onClick: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}