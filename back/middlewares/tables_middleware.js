import { con } from "../config/database.js";


export const checkUsersTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("users");
    if (!tableExists) {
        // create table
        await con.schema.createTable("users", (table) => {
            table.increments("id").primary();
            table.string("name");
            table.string("email");
            table.string("password");
            table.string("bio").defaultTo("");
            table.string("avatar").defaultTo("");
            table.date("birthday").defaultTo(null);
            table.integer("phone").defaultTo(null);
            table.string("website").defaultTo("");
            table.string("gender").defaultTo("");
            table.string("address").defaultTo("");

        });
        next();
    } else {
        next();
    }
};


export const checkRoomTable = async (req, res, next) => {
    const tableExists = await con.schema.hasTable("rooms");
    if (!tableExists) {
        // create table
        await con.schema.createTable("rooms", (table) => {
            table.increments("id").primary();
            table.string("name");
            table.string('type').defaultTo("one-to-one");
            table.date("created_at").defaultTo(con.fn.now());

        });
        next();
    } else {
        next();
    }

};

export const checkRoomUserTable = async (req, res, next) => {
    const tableExists = await con.schema.hasTable("room-user");
    if (!tableExists) {
        // create table
        await con.schema.createTable("room-user", (table) => {
            // table.increments("id").primary();
            table.integer("room_id").notNullable().references("id").inTable("rooms").onDelete("CASCADE");
            table.integer("user_id").notNullable().references("id").inTable("users");

        });
        next();
    } else {
        next();
    }

};


export const checkMessagesTable = async (req, res, next) => {
    const tableExists = await con.schema.hasTable("messages");
    if (!tableExists) {
        // create table
        await con.schema.createTable("messages", (table) => {
            table.increments("id").primary();
            table.string("text");
            table.string("image");
            table.string("file");
            table.boolean("seen").defaultTo(false);
            table.dateTime("created_at").notNullable().defaultTo(con.fn.now());
            table.integer("sender_id").notNullable().references("users.id");
            table.integer("room_id").notNullable().references("rooms.id");

        });
        next();
    } else {
        next();
    }

};


export const checkPostsTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("posts");
    if (!tableExists) {
        // create table
        await con.schema.createTable("posts", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.text("text");
            table.dateTime("date").defaultTo(con.fn.now());
            table.string("image").defaultTo(null);
            table.integer("likes").defaultTo(0);
            table.integer("shares").defaultTo(0);
        });
        next();
    } else {
        next();
    }
};

export const checkCommentsTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("comments");
    if (!tableExists) {
        // create table
        await con.schema.createTable("comments", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.integer("post_id").notNullable().references("id").inTable("posts").onDelete("CASCADE");
            table.text("comment");
            table.dateTime("date").defaultTo(con.fn.now());
            table.integer("likes").defaultTo(0);
        });
        next();
    } else {
        next();
    }
};


export const checkLikesTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("likes");
    if (!tableExists) {
        // create table
        await con.schema.createTable("likes", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.integer("post_id").notNullable().references("id").inTable("posts").onDelete("CASCADE");
            table.dateTime("date").defaultTo(con.fn.now());

        });
        next();
    } else {
        next();
    }
}


export const checkSharesTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("shares");
    if (!tableExists) {
        // create table
        await con.schema.createTable("shares", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.integer("post_id").notNullable().references("id").inTable("posts").onDelete("CASCADE");
            table.dateTime("date").defaultTo(con.fn.now());

        });
        next();
    } else {
        next();
    }
}


export const checkNotificationsTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("notifications");
    if (!tableExists) {
        // create table
        await con.schema.createTable("notifications", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.integer("post_id").references("id").inTable("posts").onDelete("CASCADE");
            table.text("text");
            table.dateTime("date").defaultTo(con.fn.now());
            table.boolean("seen").defaultTo(false);

        });
        next();
    } else {
        next();
    }
}


export const checkFollowersTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("followers");
    if (!tableExists) {
        // create table
        await con.schema.createTable("followers", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.integer("follower_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.dateTime("date").defaultTo(con.fn.now());
            table.string("status").defaultTo("pending");
        });
        next();
    } else {
        next();
    }
}


