import fs from 'fs';
import path from 'path';

import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
    return knex("templates").insert([
        {
            name: 'master',
            content: fs.readFileSync(path.join(__dirname, './data/templates/master.html'), {
                encoding: 'utf8',
            })
        },
        {
            name: '500',
            content: fs.readFileSync(path.join(__dirname, './data/templates/500.html'), {
                encoding: 'utf8',
            })
        },
    ]);
}
