import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  theme: {
    extend: {
      colors: {
        'aneo-orange': '#FE5100',
        'aneo-blue': '#000F9F',
        'aneo-green': '#00C4B3',
        'aneo-red': '#FF0000',
        'aneo-yellow': '#FFB600',
      },
    },
  },
  extract: {
    include: [resolve(__dirname, '../**/*.{vue,ts}')],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
}))
