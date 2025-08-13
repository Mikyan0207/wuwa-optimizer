import type { BaseCharacter } from '~/Core/Interfaces/Character'
import { createError, defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id || Number.isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid character ID',
    })
  }

  try {
    const character = await useStorage<BaseCharacter>('data')
      .getItem(`characters/${id}/${id}.json`)

    if (!character) {
      throw createError({
        statusCode: 404,
        statusMessage: `Character ${id} not found`,
      })
    }

    return character
  }
  catch {
    throw createError({
      statusCode: 404,
      statusMessage: `Character ${id} not found`,
    })
  }
})
