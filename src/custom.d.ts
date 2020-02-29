type TagItem = {
    name: string;
    value: string;
}
type RecordItem = {
    tag: TagItem;
    type: string;
    note: string;
    amount: number;
    createAt?: Date;
}