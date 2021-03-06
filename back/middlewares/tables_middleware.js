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


export const checkGroupTable = async (req, res, next) => {
    const tableExists = await con.schema.hasTable("groups");
    if (!tableExists) {
        // create table
        await con.schema.createTable("groups", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.string("description").defaultTo("");
            table.string("image").defaultTo("");
            table.dateTime("created_at").defaultTo(con.fn.now());
            table.integer("admin_id").notNullable().references("id").inTable("users");

        });
        next();
    } else {
        next();
    }
};

export const checkGroupUserTable = async (req, res, next) => {
    const tableExists = await con.schema.hasTable("group-user");
    if (!tableExists) {
        // create table
        await con.schema.createTable("group-user", (table) => {
            table.increments("id").primary();
            table.integer("group_id").notNullable().references("id").inTable('groups');
            table.integer("user_id").notNullable().references("id").inTable('users');

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
            table.integer("group_id").defaultTo(null).references("id").inTable("groups").onDelete("CASCADE");
            table.text("text");
            table.dateTime("date").defaultTo(con.fn.now());
            table.string("image").defaultTo(null);

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
            table.text("comment").notNullable();
            table.dateTime("date").defaultTo(con.fn.now());
            table.integer("likes").defaultTo(0);
        });
        next();
    } else {
        next();
    }
};

export const checkCommentsLikesTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("comment-likes");
    if (!tableExists) {
        // create table
        await con.schema.createTable("comment-likes", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.integer("comment_id").notNullable().references("id").inTable("comments").onDelete("CASCADE");
            table.dateTime("date").defaultTo(con.fn.now());

        });
        next();
    } else {
        next();
    }
}

export const checkLikesTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("likes");
    if (!tableExists) {
        // create table
        await con.schema.createTable("likes", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.integer("post_id").references("id").inTable("posts").onDelete("CASCADE");
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
            table.text("text");
            table.dateTime("date").defaultTo(con.fn.now());

        });
        next();
    } else {
        next();
    }
}

export const checkShareLikesTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("share-likes");
    if (!tableExists) {
        // create table
        await con.schema.createTable("share-likes", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.integer("share_id").references("id").inTable("shares").onDelete("CASCADE");
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
/*                                                   Start Resume                                              */
export const checkEducationTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("education");
    if (!tableExists) {
        // create table
        await con.schema.createTable("education", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.date("DateStart").notNullable();
            table.date("DateEnd").notNullable();
            table.string('description');
            table.string('title');

        });
        next();
    } else {
        next();
    }
}

export const checkExperienceTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("experience");
    if (!tableExists) {
        // create table
        await con.schema.createTable("experience", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.date("DateStart").notNullable();
            table.date("DateEnd").notNullable();
            table.string('description');
            table.string('title');


        });
        next();
    } else {
        next();
    }
}
export const checkUserInfoTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("userinfo");
    if (!tableExists) {
        // create table
        await con.schema.createTable("userinfo", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.string('name');
            table.date("birthday").notNullable();
            table.string('email');
            table.string('facebook');
            table.string('linkedin');
            table.string('github');
            table.string('subtitle');
            table.string('picture').notNullable();
        });
        next();
    } else {
        next();
    }
}
export const checkSkillsTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("skills");
    if (!tableExists) {
        // create table
        await con.schema.createTable("skills", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.string('name').notNullable();
            table.integer('level').notNullable();
        });
        next();
    } else {
        next();
    }
}
export const checkLanguageTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("language");
    if (!tableExists) {
        // create table
        await con.schema.createTable("language", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.string('name').notNullable();
            table.string('level').notNullable();
        });
        next();
    } else {
        next();
    }
}
export const checkProjectTable = async (req, res, next) => {
    // check if table exists
    const tableExists = await con.schema.hasTable("project");
    if (!tableExists) {
        // create table
        await con.schema.createTable("project", (table) => {
            table.increments("id").primary();
            table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
            table.string('name').notNullable();
            table.string('description').notNullable();
            table.string('link').notNullable();
            table.string('picture');
            table.date('date').notNullable();
        });
        next();
    } else {
        next();
    }
}
/*                                               End Resume                                              */





