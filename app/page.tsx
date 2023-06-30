import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-between p-10">
      Pagina principal
      <div className="flex gap-4">
        <Link href='/categorias'>
          <button type="button" className="bg-blue-500 text-white px-3 py-2 rounded-md">
            Categorias
          </button>
        </Link>
        <Link href='/productos'>
          <button type="button" className="bg-blue-500 text-white px-3 py-2 rounded-md">
            Productos
          </button>
        </Link>
      </div>
    </main>
  )
}
