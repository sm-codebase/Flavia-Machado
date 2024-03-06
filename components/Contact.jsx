import React from "react";

const Contact = () => {
  return (
    <div className="max-w-full h-[500px] grid items-center mt-[150px] ">
      <div className="flex md:flex-row flex-col-reverse justify-center   gap-10 text-left p-5">
        <div className="">
          <form
            className="w-[600px] h-full"
            action=""
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-2">
              <input
                className="border shadow-lg p-3 w-full my-2"
                type="text"
                placeholder="Nome"
                name="nome"
                required
              />
              <input
                className="border shadow-lg p-3 w-full my-2"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <input
              className="border shadow-lg p-3 w-full my-2"
              type="tel"
              placeholder="Whatsapp"
              name="telefone"
              required
            />

            <textarea
              className="border shadow-lg p-3 w-full"
              cols=""
              rows="3"
              placeholder="Mensagem"
              name="mensagem"
              required
            />

            <div className="grid  justify-items-center">
              <button className="border shadow-lg p-2 w-[200px] rounded-3xl mt-4">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-6 ">
          <h1 className="text-4xl font-bold">Fale conosco!</h1>
          <p>Tenho a melhor solução para o seu negócio.</p>
          <div>
            <p className="font-bold">Endereço</p>
            <p>
              Vereador Sebastião José de Melo, 250- Jd Nova Odessa, Mogi Guaçu,
              SP, Brazil
            </p>
          </div>
          <div>
            <p className="font-bold">Contato</p>
            <p>
              (19) 99808-5996 | (19) 99660.7262 | buffetflaviamachado.com.br
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
