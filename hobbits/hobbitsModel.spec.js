const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel')



describe('hobbits model', () => {
	beforeAll(async () => {
		await db('hobbits').truncate()
	})
	
	beforeEach(async () => {
		await db('hobbits').truncate()
	})
	
	
	describe('insert()', () => {
		it('should insert provided a hobit', async () => {
			await Hobbits.insert({name:'gaffer'})
			
			const hobbits = await db('hobbits')
			
			expect(hobbits).toHaveLength(1)
		})
		
		it('should insert provided a hobit', async () => {
			let hobbit = await Hobbits.insert({name:'gaffer'})
			expect(hobbit.name).toBe('gaffer')
			
			hobbit = await Hobbits.insert({name:'same'})
			expect(hobbit.name).toBe('same')
			
			const hobbits = await db('hobbits')
			expect(hobbits).toHaveLength(2)
		})
	})
})
