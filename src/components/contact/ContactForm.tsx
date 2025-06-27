"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  apellido: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("Email inválido"),
  servicio: z.enum(["flyers", "video", "landing"], {
    required_error: "Debes seleccionar un servicio",
  }),
  detalles: z.string().min(10, "Por favor, escribí al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSumbit = async (data: FormData) => {
    try {
      const res = await fetch(import.meta.env.PUBLIC_FORMSPREE_URL || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // alert("Mensaje enviado correctamente");
        toast.success("Mensaje enviado correctamente");
        reset();
      } else {
        // alert("Hubo un error al enviar el mensaje");
        toast.error("Hubo un error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("Error de conexión al enviar el mensaje");
      toast.error("Error de conexión al enviar el mensaje");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSumbit)}
        className="max-w-xl mx-auto space-y-6"
      >
        <div>
          <label className="block font-semibold">Nombre</label>
          <input
            type="text"
            {...register("nombre")}
            className="w-full border p-2 rounded"
          />
          {errors.nombre && (
            <p className="text-red-500">{errors.nombre.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Apellido</label>
          <input
            type="text"
            {...register("apellido")}
            className="w-full border p-2 rounded"
          />
          {errors.apellido && (
            <p className="text-red-500">{errors.apellido.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">
            ¿Qué servicio te interesa?
          </label>
          <select
            {...register("servicio")}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Selecciona una opción --</option>
            <option value="flyers">Diseño de Flyers</option>
            <option value="video">Edición de Video</option>
            <option value="landing">Creación de Landing Pages</option>
          </select>
          {errors.servicio && (
            <p className="text-red-500">{errors.servicio.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Detalles</label>
          <textarea
            {...register("detalles")}
            rows={5}
            className="w-full border p-2 rounded"
            placeholder="Contame más sobre lo que necesitás..."
          >
            {errors.detalles && (
              <p className="text-red-500">{errors.detalles.message}</p>
            )}
          </textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-newBlue-200 text-white px-6 py-2 rounded hover:bg-newBlue-100 transition w-full cursor-pointer"
        >
          {isSubmitting ? "Enviando" : "Enviar"}
        </button>
      </form>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      />
    </>
  );
}
