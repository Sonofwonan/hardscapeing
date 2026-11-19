import fs from 'node:fs';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

interface StaticRouteMeta {
  route: string;
  title?: string;
  description?: string;
  image?: string;
}

const STATIC_ROUTES: StaticRouteMeta[] = [
  {
    route: 'about',
    title: 'About Our Practice | Aureus & Monument',
    description: 'Monumental stonework, geotechnical rock engineering, and heritage conservation across continents.'
  },
  {
    route: 'services',
    title: 'Architectural & Heritage Services | Aureus & Monument',
    description: 'Eight architectural hardscaping, museum modernization, courtyard, and heritage conservation disciplines.'
  },
  {
    route: 'projects',
    title: 'International Projects | Aureus & Monument',
    description: 'Selected clifftop estates, palace courtyards, water amphitheaters, and monument preservation commissions.'
  },
  {
    route: 'materials',
    title: 'Materials, Stone Samples & Plans | Aureus & Monument',
    description: 'Quarry stone library, topographic site plans, and mineral inlay craft specifications.'
  },
  {
    route: 'team',
    title: 'Leadership & Master Craftsmen | Aureus & Monument',
    description: 'Meet the principals, geotechnical directors, and master stonemasons of Aureus & Monument.'
  },
  {
    route: 'team/fahad',
    title: 'Fahad Al Sabah – Principal & Managing Director | Aureus & Monument',
    description: 'Over thirty years leading architectural stone commissions, royal courtyard complexes, and private island sanctuaries.',
    image: '/images/portrait_arab_prince_director_1794441904418.jpg'
  },
  {
    route: 'team/gabriel',
    title: 'Gabriel Chen – Structural & Geotechnical Director | Aureus & Monument',
    description: 'Directs deep bedrock micropiling, seismic slope stabilization, and hidden hydrostatic drainage networks.',
    image: '/images/portrait_chinese_director_1794441906290.jpg'
  },
  {
    route: 'team/jefferey',
    title: 'Jefferey T. Montgomery – Director of Private Estates | Aureus & Monument',
    description: 'Coordinates private family offices, cultural boards, and international estate trusts with turnkey schedule delivery.',
    image: '/images/portrait_black_american_director_1794441904183.jpg'
  },
  {
    route: 'team/corinne',
    title: 'Corinne W. Smith – Master Stonemason & Materials Director | Aureus & Monument',
    description: 'Leads international quarry inspection, traditional lime mortar formulation, and museum stone conservation worldwide.',
    image: '/images/portrait_corinne_w_smith_passport_1794441905659.jpg'
  },
  {
    route: 'contact',
    title: 'Global Inquiries & Toronto Office | Aureus & Monument',
    description: 'Contact Aureus & Monument in Toronto, Canada for private estates, museum modernization, and monument preservation.'
  },
  ...Array.from({ length: 12 }, (_, idx) => ({ route: `projects/${idx + 1}` })),
  ...Array.from({ length: 8 }, (_, idx) => ({ route: `services/0${idx + 1}` })),
  ...[
    'studio-samples',
    'geographical-plan',
    'macro-lapis-inlay',
    'macro-stone-strata',
    'macro-basalt-porphyry',
    'quarry-cutting'
  ].map((slug) => ({ route: `samples/${slug}` })),
  ...[
    'thassos-marble',
    'sivec-marble',
    'adnet-marble',
    'tivoli-travertine',
    'omani-travertine',
    'istrian-limestone',
    'pierre-bourgogne',
    'afghan-lapis',
    'gold-smalti',
    'mother-of-pearl',
    'charcoal-basalt',
    'porphyry-belgian',
    'glacial-boulders',
    'kyoto-shirakawa'
  ].map((slug) => ({ route: `materials/${slug}` }))
];

function escapeHtmlAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function spaStaticRoutesPlugin(): Plugin {
  return {
    name: 'spa-static-routes',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const baseHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(baseHtmlPath)) return;

      const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

      for (const item of STATIC_ROUTES) {
        let html = baseHtml;
        if (item.title) {
          const escapedTitle = escapeHtmlAttr(item.title);
          html = html
            .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`)
            .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapedTitle}" />`)
            .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escapedTitle}" />`);
        }
        if (item.description) {
          const escapedDesc = escapeHtmlAttr(item.description);
          html = html
            .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, `<meta name="description" content="${escapedDesc}" />`)
            .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escapedDesc}" />`)
            .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${escapedDesc}" />`);
        }
        if (item.image) {
          const escapedImg = escapeHtmlAttr(item.image);
          html = html
            .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${escapedImg}" />`)
            .replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${escapedImg}" />`);
        }

        const routeDir = path.join(distDir, item.route);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
      }

      fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf-8');
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), spaStaticRoutesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
