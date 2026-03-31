import { motion } from 'framer-motion';

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-gold mb-4">Our People</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-ocean mt-4">
            The Team Behind the Brand
          </h2>
          <p className="mt-6 text-lg text-ocean/60 max-w-2xl mx-auto">
            A passionate team of strategists, researchers, and activators
            committed to delivering exceptional outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Founder card */}
          <motion.div
            className="card p-8 border-t-4 border-t-ocean"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-5 mb-6">
              {/* Gold monogram circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg shadow-gold/20">
                I
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ocean">Irfan</h3>
                <p className="text-sm text-terra font-medium">Founder & Managing Director</p>
              </div>
            </div>
            <p className="text-sm text-ocean/60 leading-relaxed">
              With a deep understanding of the Mauritian market and years of experience
              in brand strategy, Irfan leads Exotica with a vision to become the island's
              most trusted activation and research partner.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-ocean/5 text-ocean/60 font-medium">Strategy</span>
              <span className="text-xs px-3 py-1 rounded-full bg-ocean/5 text-ocean/60 font-medium">Client Relations</span>
              <span className="text-xs px-3 py-1 rounded-full bg-ocean/5 text-ocean/60 font-medium">Business Development</span>
            </div>
          </motion.div>

          {/* Field team card */}
          <motion.div
            className="card p-8 border-t-4 border-t-forest"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest to-forest-dark flex items-center justify-center text-white shadow-lg shadow-forest/20">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ocean">Field Operations</h3>
                <p className="text-sm text-forest font-medium">24+ Trained Professionals</p>
              </div>
            </div>
            <p className="text-sm text-ocean/60 leading-relaxed">
              Our field team is the backbone of every activation and research project.
              Trained in consumer engagement, data collection, and brand representation,
              they deliver consistent quality across all districts.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-forest/5 rounded-xl p-3 text-center">
                <div className="text-lg font-display font-bold text-forest">12</div>
                <div className="text-[10px] text-ocean/50 uppercase tracking-wider">Districts Covered</div>
              </div>
              <div className="bg-forest/5 rounded-xl p-3 text-center">
                <div className="text-lg font-display font-bold text-forest">50+</div>
                <div className="text-[10px] text-ocean/50 uppercase tracking-wider">Activations Done</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
