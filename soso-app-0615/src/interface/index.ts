export interface ComponentPropsWithChildren<T = Record<string, never>> {
    children: React.ReactNode;
    props?: T;
}
