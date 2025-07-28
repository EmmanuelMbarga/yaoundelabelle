"use client";

import WebIcon from "@/components/webIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://static.readdy.ai/image/c5957e8dc1f6ecb238bc8fb2cc6df703/f65b84f7acdc275d4b058aa8a3602560.jfif"
                alt="Yaoundé Labelle"
                className="h-10 w-auto sm:h-12"
              />
            </div>

            {/* Menu burger pour mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-orange-600 p-2 cursor-pointer"
              >
                <i
                  className={`text-2xl ${
                    isMenuOpen ? "ri-close-line" : "ri-menu-line"
                  }`}
                ></i>
              </button>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="#accueil"
                  className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Accueil
                </a>
                <a
                  href="#apropos"
                  className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  À propos
                </a>
                <a
                  href="#produits"
                  className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Produits
                </a>
                <a
                  href="#services"
                  className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Services
                </a>
                <a
                  href="#livraison"
                  className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Livraison
                </a>
                <a
                  href="#devis"
                  className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Devis
                </a>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Menu mobile déroulant */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#accueil"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Accueil
                </a>
                <a
                  href="#apropos"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  À propos
                </a>
                <a
                  href="#produits"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Produits
                </a>
                <a
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Services
                </a>
                <a
                  href="#livraison"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Livraison
                </a>
                <a
                  href="#devis"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Devis
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Large%20African%20construction%20materials%20warehouse%20with%20sand%2C%20gravel%2C%20granite%20piles%2C%20wooden%20planks%2C%20heavy%20trucks%2C%20African%20workers%20in%20safety%20gear%2C%20warm%20sunset%20lighting%2C%20industrial%20African%20landscape%2C%20professional%20construction%20site%20with%20organized%20material%20storage%2C%20earthen%20tones%20and%20warm%20colors%2C%20authentic%20African%20construction%20industry%20scene%2C%20high%20quality%20business%20photography&width=1920&height=1080&seq=hero-main&orientation=landscape')`,
        }}
      >
        <div className="text-center text-white max-w-4xl px-4 py-8 sm:py-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src="https://static.readdy.ai/image/c5957e8dc1f6ecb238bc8fb2cc6df703/f65b84f7acdc275d4b058aa8a3602560.jfif"
              alt="Yaoundé Labelle"
              className="h-16 w-auto sm:h-24 filter brightness-0 invert"
            />
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            style={{ fontFamily: "Pacifico, serif" }}
          >
            Yaoundé Labelle
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 font-light px-2">
            Votre partenaire de confiance pour tous vos matériaux de
            construction
          </p>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
            Sable, gravier, granite, planches - Nous fournissons des matériaux
            de qualité supérieure pour tous vos projets de construction au
            Cameroun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#produits"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 whitespace-nowrap cursor-pointer"
            >
              Voir nos produits
            </a>
            <a
              href="#devis"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 whitespace-nowrap cursor-pointer"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  Créée en{" "}
                  <span className="font-bold text-orange-600">2013</span> par{" "}
                  <span className="font-bold text-orange-600">
                    Balla Biloa Yvon Thierry
                  </span>
                  , Yaoundé Labelle s'est imposée comme un acteur majeur dans la
                  fourniture de matériaux de construction au Cameroun. Fort de{" "}
                  <span className="font-bold text-orange-600">
                    11 années d'expérience
                  </span>
                  , notre entreprise a su développer une expertise reconnue dans
                  le secteur.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Spécialisés dans la commercialisation de matériaux de haute
                  qualité - sable, gravier, granite et planches - nous nous
                  distinguons par notre approche rigoureuse du contrôle qualité
                  et notre capacité à répondre aux exigences des projets les
                  plus ambitieux. Notre réseau logistique couvre efficacement
                  les régions de Yaoundé et Douala.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Au cours de ces années, nous avons établi des partenariats
                  durables avec des entrepreneurs, des architectes et des
                  particuliers, participant activement au développement urbain
                  et résidentiel du pays. Notre croissance constante témoigne de
                  la confiance que nous accordent nos clients.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Notre Engagement
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Sous la direction de{" "}
                    <span className="font-semibold text-orange-600">
                      Balla Biloa Yvon Thierry
                    </span>
                    , Yaoundé Labelle s'engage à maintenir les plus hauts
                    standards de qualité tout en offrant des solutions
                    compétitives. Nous sommes le partenaire privilégié pour vos
                    projets de construction, alliant expertise technique et
                    service personnalisé.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div
                  className="w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded-lg shadow-lg object-top"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20African%20construction%20company%20office%20interior%20with%20modern%20furniture%2C%20elegant%20reception%20area%2C%20construction%20materials%20samples%20displayed%2C%20African%20business%20professional%20in%20suit%2C%20warm%20natural%20lighting%2C%20contemporary%20African%20office%20design%2C%20clean%20minimalist%20aesthetic%2C%20professional%20construction%20industry%20atmosphere%2C%20high%20quality%20business%20photography&width=600&height=400&seq=company-history&orientation=landscape')`,
                  }}
                ></div>

                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-orange-600 text-white p-4 sm:p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">11</div>
                    <div className="text-xs sm:text-sm">Années</div>
                    <div className="text-xs sm:text-sm">d'Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-xl sm:text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Expertise
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Une décennie d'expertise technique et commerciale dans les
                matériaux de construction
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-line text-xl sm:text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Partenariat
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Relations privilégiées avec les professionnels du BTP et les
                particuliers
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-xl sm:text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Amélioration continue de nos processus et services client
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Matériaux de Construction
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Des matériaux de qualité supérieure pour tous vos projets de
              construction, avec prix détaillés pour Yaoundé et Douala
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Gravier */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div
                className="w-full h-40 sm:h-48 bg-cover bg-center rounded-lg mb-4 object-top"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Construction%20gravel%20aggregate%20stones%20in%20African%20construction%20yard%2C%20various%20gravel%20sizes%2C%20construction%20equipment%20in%20background%2C%20African%20workers%20handling%20materials%2C%20professional%20construction%20site%2C%20warm%20African%20sunlight%2C%20industrial%20construction%20materials&width=400&height=300&seq=gravel-product&orientation=landscape')`,
                }}
              ></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Gravier
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Gravier concassé de différentes granulométries pour béton et
                drainage
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                    Caractéristiques :
                  </h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>• Gravier 5/15 mm - Pour béton fin</li>
                    <li>• Gravier 15/25 mm - Pour gros béton</li>
                    <li>• Résistant et durable</li>
                    <li>• Conforme aux normes</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-orange-600 mb-2 text-sm sm:text-base">
                    Prix par tonne :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-medium text-orange-800">Yaoundé</p>
                      <p className="text-orange-700">
                        5/15 et 15/25:{" "}
                        <span className="font-bold">6 500 FCFA</span>
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-medium text-blue-800">Douala</p>
                      <p className="text-blue-700">
                        5/15 et 15/25:{" "}
                        <span className="font-bold">11 000 FCFA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sable */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div
                className="w-full h-40 sm:h-48 bg-cover bg-center rounded-lg mb-4 object-top"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=High%20quality%20construction%20sand%20piles%20in%20African%20construction%20site%2C%20golden%20sand%20texture%2C%20construction%20workers%20in%20background%2C%20warm%20African%20lighting%2C%20professional%20sand%20storage%20area%2C%20earthen%20tones%2C%20realistic%20construction%20materials%20photography%2C%20African%20construction%20industry&width=400&height=300&seq=sand-product&orientation=landscape')`,
                }}
              ></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Sable Carrière
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Sable de carrière de qualité supérieure pour béton, mortier et
                remblayage
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                    Caractéristiques :
                  </h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>• Granulométrie 0/5 mm</li>
                    <li>• Sable lavé et tamisé</li>
                    <li>• Idéal pour béton et mortier</li>
                    <li>• Livraison en vrac</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-orange-600 mb-2 text-sm sm:text-base">
                    Prix par tonne :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-medium text-orange-800">Yaoundé</p>
                      <p className="text-orange-700">
                        0/5: <span className="font-bold">5 500 FCFA</span>
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-medium text-blue-800">Douala</p>
                      <p className="text-blue-700">
                        0/5: <span className="font-bold">3 500 FCFA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Moellon */}
            <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div
                className="w-full h-40 sm:h-48 bg-cover bg-center rounded-lg mb-4 object-top"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Stone%20blocks%20and%20crushed%20stone%20moellon%20in%20African%20construction%20site%2C%20various%20stone%20sizes%2040-70mm%2C%20construction%20workers%20with%20safety%20equipment%2C%20stone%20quarry%20operation%2C%20warm%20African%20sunlight%2C%20professional%20stone%20materials%20storage%2C%20earthen%20natural%20colors&width=400&height=300&seq=moellon-product&orientation=landscape')`,
                }}
              ></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Moellon
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Pierre concassée pour remblayage et fondations
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                    Caractéristiques :
                  </h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>• Granulométrie 40/70 mm</li>
                    <li>• Pierre concassée résistante</li>
                    <li>• Idéal pour remblayage</li>
                    <li>• Drainage et fondations</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-orange-600 mb-2 text-sm sm:text-base">
                    Prix par tonne :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-medium text-orange-800">Yaoundé</p>
                      <p className="text-orange-700">
                        40/70: <span className="font-bold">5 500 FCFA</span>
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-medium text-blue-800">Douala</p>
                      <p className="text-blue-700">
                        40/70: <span className="font-bold">9 000 FCFA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tout Venant */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div
                className="w-full h-40 sm:h-48 bg-cover bg-center rounded-lg mb-4 object-top"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Mixed%20construction%20aggregates%20tout%20venant%20material%20in%20African%20construction%20site%2C%20various%20sizes%20of%20stones%20and%20gravel%20mixed%20together%2C%20construction%20equipment%20and%20trucks%2C%20African%20workers%20in%20safety%20gear%2C%20warm%20sunlight%2C%20professional%20construction%20materials%20yard&width=400&height=300&seq=toutvenant-product&orientation=landscape')`,
                }}
              ></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Tout Venant
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Mélange de matériaux pour remblayage et terrassement
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                    Caractéristiques :
                  </h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>• Mélange de sable et gravier</li>
                    <li>• Matériau de remblayage</li>
                    <li>• Idéal pour terrassement</li>
                    <li>• Économique et polyvalent</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-orange-600 mb-2 text-sm sm:text-base">
                    Prix par tonne :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-medium text-orange-800">Yaoundé</p>
                      <p className="text-orange-700">
                        <span className="font-bold">6 000 FCFA</span>
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-medium text-blue-800">Douala</p>
                      <p className="text-blue-700">
                        <span className="font-bold">10 000 FCFA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Information importante
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Les prix peuvent varier selon les quantités commandées et les
                conditions de livraison. Contactez-nous pour un devis
                personnalisé et détaillé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-50 to-amber-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Un service complet pour tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-xl sm:text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Livraison Rapide
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Livraison dans toute la région de Yaoundé avec nos camions
                spécialisés
              </p>
              <a
                href="#livraison"
                className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer text-sm sm:text-base"
              >
                En savoir plus →
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-xl sm:text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Qualité Garantie
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Matériaux testés et certifiés conformes aux normes de
                construction
              </p>
              <a
                href="#produits"
                className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer text-sm sm:text-base"
              >
                Voir la qualité →
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-xl sm:text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Support Client
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Conseils d'experts et accompagnement personnalisé pour vos
                projets
              </p>
              <a
                href="#contact"
                className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer text-sm sm:text-base"
              >
                Nous contacter →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zones de livraison Section */}
      <section id="livraison" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Zones de Livraison
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Nous livrons dans toutes les principales villes du Cameroun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-2-fill text-2xl sm:text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Yaoundé
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Zone principale - Livraison gratuite pour commandes {">"} 5
                tonnes
              </p>
              <a
                href="#livraison"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                Zones de livraison
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-ship-2-fill text-2xl sm:text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Douala
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Livraison express disponible - Tarifs spéciaux
              </p>
              <a
                href="#livraison"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                Tarifs Douala
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="devis"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#devis"
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 whitespace-nowrap cursor-pointer"
            >
              Demander un devis
            </a>
            <a
              href="#produits"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 whitespace-nowrap cursor-pointer"
            >
              Voir nos produits
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="https://static.readdy.ai/image/c5957e8dc1f6ecb238bc8fb2cc6df703/f65b84f7acdc275d4b058aa8a3602560.jfif"
                  alt="Yaoundé Labelle"
                  className="h-10 sm:h-12 w-auto filter brightness-0 invert mr-3"
                />
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ fontFamily: "Pacifico, serif" }}
              >
                Yaoundé Labelle
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Votre partenaire de confiance pour tous vos matériaux de
                construction au Cameroun. Qualité, fiabilité et service client
                exceptionnel depuis des années.
              </p>
              <div className="flex justify-center gap-2 sm:flex-row sm:justify-start">
                <WebIcon
                  link={"https://facebook.com"}
                  icon={"/images/facebook.png"}
                />
                <WebIcon
                  link={"https://instagram.com"}
                  icon={"/images/insta.png"}
                />
                <WebIcon
                  link={"https://wa.me/237652148288"}
                  icon={"/images/whatsapp.png"}
                />
                <WebIcon
                  link={"https://tel/237699372160"}
                  icon={"/images/whatsapp.png"}
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Produits
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a
                    href="#produits"
                    className="hover:text-white cursor-pointer"
                  >
                    Tous les produits
                  </a>
                </li>
                <li>
                  <a
                    href="#produits"
                    className="hover:text-white cursor-pointer"
                  >
                    Gravier
                  </a>
                </li>
                <li>
                  <a
                    href="#produits"
                    className="hover:text-white cursor-pointer"
                  >
                    Sable carrière
                  </a>
                </li>
                <li>
                  <a
                    href="#produits"
                    className="hover:text-white cursor-pointer"
                  >
                    Moellon
                  </a>
                </li>
                <li>
                  <a
                    href="#produits"
                    className="hover:text-white cursor-pointer"
                  >
                    Tout venant
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Liens Utiles
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#devis" className="hover:text-white cursor-pointer">
                    Demander un devis
                  </a>
                </li>
                <li>
                  <a
                    href="#livraison"
                    className="hover:text-white cursor-pointer"
                  >
                    Zones de livraison
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white cursor-pointer"
                  >
                    Nos services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white cursor-pointer"
                  >
                    Nous contacter
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+237699372160"
                    className="hover:text-white cursor-pointer"
                  >
                    Appeler maintenant
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:yaoundelabelle95@gmail.com"
                    className="hover:text-white cursor-pointer"
                  >
                    Envoyer un email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; 2024 Yaoundé Labelle. Tous droits réservés. |
              <a
                href="tel:+237699372160"
                className="hover:text-white cursor-pointer ml-2"
              >
                +237 699 372 160
              </a>{" "}
              |
              <a
                href="mailto:yaoundelabelle95@gmail.com"
                className="hover:text-white cursor-pointer ml-2"
              >
                yaoundelabelle95@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      {/* Bouton WhatsApp flottant */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <div>
          <WebIcon
            link={"https://wa.me/237699372160?text=Bonjour"}
            icon={"/images/whatsapp.png"}
          />
          <span className="ml-2 hidden lg:group-hover:inline-block whitespace-nowrap text-sm">
            Contactez-nous
          </span>
        </div>
      </div>
    </div>
  );
}
