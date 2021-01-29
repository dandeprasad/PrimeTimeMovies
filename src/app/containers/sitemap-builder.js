import Base from './Base'
import siteMapBuilder, {getSites} from 'react-router-sitemap-builder'


getSites(Base);
/*
 [ '/',
  '/test',
  '/posts',
  '/posts/*',
  '/article/*',
  '/tags/*',
  '/tags/pages',
  '/tags/pages/*',
  '/archive',
  '/archive/*' ]
 */
/* router, prefix, save_to_where */
sitemapBuilder(Bases, 'https://collegeexplore.in', __dirname+'/sitemap.txt');
/* return true of false */
