export interface ICountState {
    count: number
}
export interface IPostType {
    id: number;
    title: string;
    content: string
}

export interface IReduxState {
    counter: ICountState
    posts: IPostType[]
}
