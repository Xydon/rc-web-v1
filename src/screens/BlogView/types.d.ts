export interface BlogProps{
    id: string;
    heading: string;
    content: string;
    author: string;
    date: string;
    comments: Comment[];

}
export interface Comment{
    id: string;
    content: string;
    likes: number;
    
}