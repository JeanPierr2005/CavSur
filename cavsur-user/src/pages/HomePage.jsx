import imagen from "../img/img1.jpg";
import imagen1 from "../img/img2.jpg";
import imagen2 from "../img/img3.jpg";
import imagen3 from "../img/img4.jpg";

export default function HomePage() {
    const slides = [imagen, imagen1, imagen2, imagen3];

    const indiceImagen = 1;
    const indiceImagen1 = 0;
    const indiceImagen2 = 3;
    const indiceImagen3 = 2;

    return (
        <div>
            {/* HERO */}
            <section className="hero w-full">
                <div className="w-full bg-cover">
                    <div className="absolute  sm:top-[200px] md:top-[400px] top-[100px] left-1 z-10 backdrop-blur-sm">
                        <h1 className="text-8xl md:text-8xl sm:text-4xl xs:text-base text-[#395886] uppercase">Cavsur</h1>
                        <p className="text-6xl md:text-6xl sm:text-2xl xs:text-sm mt-[50px] md:w-[1050px] rounded-2xl-">
                            {" "}
                            Más que jueces, somos guardianes del espíritu del
                            voleibol.
                        </p>
                    </div>
                    <div>
                        <img
                            src={slides[indiceImagen]}
                            alt="Mi imagen"
                        />
                    </div>
                </div>
            </section>
            {/* FIN HERO */}
            {/* CARDS */}
            <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 gap-2 my-6">
                <div className="bg-slate-200 max-w-md w-full h-[600px] p-10 my-2 mx-3 shadow-lg rounded-md">
                    <div className="flex gap-2 items-center">
                        <img src={slides[indiceImagen1]} />
                    </div>
                    <h1 className="text-4xl font-bold">FCV</h1>
                    <p className="text-2xl">
                        Federación Colombiana de Voleibol es institución la
                        encargada de regir el deporte del voleibol en Colombia.
                    </p>
                </div>
                <div className="bg-slate-200 max-w-md w-full h-[600px] p-10 my-2 mx-3 shadow-lg rounded-md">
                    <div className="flex gap-2 items-center">
                        <img src={slides[indiceImagen2]} />
                    </div>
                    <h1 className="text-4xl font-bold">FIVB</h1>
                    <p className="text-2xl">
                        Federación Internacional de Voleibol es el organismo
                        mundial que se dedica a regular las normas del voleibol
                        a nivel competitivo
                    </p>
                </div>
                <div className="bg-slate-200 max-w-md w-full h-[600px] p-10 my-2 mx-3 shadow-lg rounded-md">
                    <div className="flex gap-2 items-center">
                        <img src={slides[indiceImagen3]} />
                    </div>
                    <h1 className="text-4xl font-bold">CSV</h1>
                    <p className="text-2xl">
                        Confederación Sudamericana de Voleibol, rectora de la
                        actividad del voleibol de Sudamérica
                    </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* FOOTER */}
            <footer class="bg-gray-800 text-white py-4 text-center">
                <p>Copyright &copy; 2024 All rights reserved.</p>
            </footer>
        </div>
    );
}
