const request = require('supertest')
const server = require('./server')

describe('server', () => {
	it('sets the environment to testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});
	
	// open client, make a request and inspect the response
	describe('GET /',  () => {
		it('should return 200 OK',() => {
			return  request(server)
					.get('/')
					.expect(200)
		});
		
		it('should return 200 OK ', async() => {
			const result = await request(server).get('/')
			expect(result.status).toBe(200)
		});
		
		it('should return 200 OK - using use the squad( async/await) ', async() => {
			const result = await request(server).get('/')
			expect(result.type).toBe('application/json')
		});
		
		
		it('should return JSON - using done callback', done => {
			return request(server).get('/').then(res  => {
				expect(res.type).toBe('application/json')
				done()
			})
		});
		
		
		it('should return { api: "up" }', done => {
			return request(server).get('/').then(res  => {
				expect(res.body.api).toBe("up")
				done()
			})
		});
	});
});

