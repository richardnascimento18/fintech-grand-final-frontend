export interface MainListObject {
    id: string;
    title: string;
    value: string;
    onRemove?: () => void;
}