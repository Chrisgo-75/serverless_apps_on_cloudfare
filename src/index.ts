/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async scheduled(
		event: ScheduledController,
		env: Env,
		ctx: ExecutionContext
	) {
		switch (event.cron) {
		// You can set up to three schedules maximum.
		case "*/15 * * * *":
			console.log("This will be executed every 15 minutes");
			break;
		case "*/30 * * * *":
			console.log("This will be executed every 30 minutes");
			break;
		}
	  }
	}
