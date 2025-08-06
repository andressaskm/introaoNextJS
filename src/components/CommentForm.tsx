'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactValidationSchema = z.object({
  name: z.string().min(3, 'Nome muito curto!'),
  message: z.string().min(1, 'Mensagem obrigatória').max(280, 'Máximo 280 caracteres'),
})

type CommentFormData = z.infer<typeof contactValidationSchema>

interface Props {
  onSubmit: (data: CommentFormData) => void
}

export default function CommentForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<CommentFormData>({
    resolver: zodResolver(contactValidationSchema),
  })

  const handleFormSubmit = (data: CommentFormData) => {
    onSubmit(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4 max-w-md"
    >
      <div>
        <input
          type="text"
          placeholder="Seu nome"
          {...register('name')}
          className="border px-3 py-2 rounded w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Sua mensagem"
          {...register('message')}
          className="border px-3 py-2 rounded resize-none w-full"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  )
}
