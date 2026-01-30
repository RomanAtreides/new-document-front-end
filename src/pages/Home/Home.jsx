import { Header } from "../../components/Header/Header";
import { MenuBar } from "../../components/MenuBar/MenuBar";

export function Home() {
    return (
        <div className="flex flex-col items-center justify-content-center min-vh-100">
            <MenuBar />
            <Header />
        </div>
    );
}
