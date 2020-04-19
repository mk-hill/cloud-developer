export const config = {
  dev: {
    username: process.env.UDAGRAM_DB_USERNAME,
    password: process.env.UDAGRAM_DB_PASSWORD,
    database: process.env.UDAGRAM_DB_DATABASE,
    host: process.env.UDAGRAM_DB_HOST,
    dialect: process.env.UDAGRAM_DB_DIALECT,
    aws_region: process.env.UDAGRAM_AWS_REGION,
    aws_profile: process.env.UDAGRAM_AWS_PROFILE,
    aws_media_bucket: process.env.UDAGRAM_AWS_MEDIA_BUCKET,
  },
  prod: {
    username: '',
    password: '',
    database: 'udagram_prod',
    host: '',
    dialect: 'postgres',
  },
};
