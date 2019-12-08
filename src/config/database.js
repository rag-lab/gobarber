module.exports = {
  dialect: 'postgres',
  host: 'potgres-db.cfcjktr0t5nk.sa-east-1.rds.amazonaws.com',
  username: 'postgres',
  password: 'postgres',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
