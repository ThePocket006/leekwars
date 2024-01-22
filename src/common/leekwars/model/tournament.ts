import { Comment } from '@/common/leekwars/model/comment'

class Tournament {
	id!: number
	type!: number
	date!: number
	finished!: boolean
	rounds!: any
	comments!: Comment[]
	next_round!: number
	group!: number | null
	size!: number
}

export { Tournament }