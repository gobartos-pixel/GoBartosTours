import { useState } from 'react';

type Category = 'all' | 'alps' | 'switzerland' | 'people' | 'world' | 'sunsets';

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories = [
    { id: 'all' as Category, label: 'All' },
    { id: 'alps' as Category, label: 'Alps' },
    { id: 'sunsets' as Category, label: 'Sunsets' },
    { id: 'people' as Category, label: 'People' },
    { id: 'world' as Category, label: 'The World' },
  ];

  const photos = [
    { id: 1, category: 'alps', title: 'Alpine Farm', image: '/alps/93C5778B-B5A5-4370-8285-A889A4418758.JPG' },
    { id: 2, category: 'alps', title: 'Lake View', image: '/alps/0F64C50C-9C18-4B6F-BB67-2452F09FF677.JPG' },
    { id: 3, category: 'alps', title: 'Mountain Peak', image: '/alps/33F01866-8B5D-4244-8755-47D1098D6066.JPG' },
    { id: 4, category: 'alps', title: 'Sunset Glow', image: '/alps/B0EFB1BF-4504-4AF2-BF1C-4F2AFF7AA9C2.JPG' },
    { id: 5, category: 'alps', title: 'Waterfall', image: '/alps/AB50B1E8-312D-4C33-816D-B0564BEBB87B.JPG' },
    { id: 6, category: 'alps', title: 'Mountain Vista', image: '/alps/DD6E53ED-B637-46E5-8DE6-0E5DDFC1D254.JPG' },
    { id: 7, category: 'alps', title: 'Alpine Lake', image: '/alps/0E3CEE64-32C0-477B-A6E0-7946C34AB053.JPG' },
    { id: 8, category: 'alps', title: 'Swiss Mountains', image: '/alps/235405D0-A631-4E31-AA8F-5A6700A26EFC.JPG' },
    { id: 9, category: 'alps', title: 'Mountain Range', image: '/alps/4FCC3779-D23B-4623-BE14-D3377791F314.JPG' },
    { id: 10, category: 'people', title: 'Tour Guest', image: '/people/0762E6F1-98F8-4AAE-BAE6-7D5F6919B21A.JPG' },
    { id: 11, category: 'people', title: 'Local Portrait', image: '/people/0E581971-17E9-4BE5-B98A-9764B09327DB.JPG' },
    { id: 12, category: 'people', title: 'Tour Experience', image: '/people/18F2F882-C992-494D-A403-0F38D3BAD6B8.JPG' },
    { id: 13, category: 'people', title: 'Happy Travelers', image: '/people/39BE0828-EC9E-444B-8B91-743F6D9B1202.JPG' },
    { id: 14, category: 'people', title: 'Tour Moments', image: '/people/B8FA3718-BD75-46EC-BC8F-391370A0967D.JPG' },
    { id: 15, category: 'people', title: 'Switzerland Views', image: '/people/BAF4D5BC-4C28-483D-A7A5-E270211FB1DB.JPG' },
    { id: 16, category: 'people', title: 'City Tour', image: '/people/D3ADD4A3-4AE9-4534-8403-2D5778B1411B.JPG' },
    { id: 17, category: 'people', title: 'Tour Guide', image: '/people/D7AF6C56-8DA3-41C0-95BE-F50FFAC4F5AD.JPG' },
    { id: 18, category: 'people', title: 'Walking Tour', image: '/people/DD57F8DE-BC8C-40BE-94FF-D56D509B14D2.JPG' },
    { id: 19, category: 'people', title: 'Bern Streets', image: '/people/DD6640E4-F19F-4C4B-B35E-BCEF8746FD29.JPG' },
    { id: 20, category: 'people', title: 'Tour Groups', image: '/people/E2CD88E3-8692-4C14-8299-56AFE55DD6D4.JPG' },
    { id: 21, category: 'people', title: 'Swiss Experience', image: '/people/E975B3EC-CEF1-49FE-9B17-F4D2610A6095.JPG' },
    { id: 22, category: 'people', title: 'Local Insights', image: '/people/F1FC1382-E45F-4BF4-A836-0AAF1A9C45B4.JPG' },
    { id: 23, category: 'people', title: 'Old Town Bern', image: '/people/F6C8CE8B-191F-4E26-B978-703510E172DB.JPG' },
    { id: 24, category: 'people', title: 'Tour Memories', image: '/people/F74127E9-9FA5-459F-85DF-10FAB5B4C04C.JPG' },
    { id: 25, category: 'sunsets', title: 'Sailboats at Sunset', image: '/sunsets/3DD2774B-BB81-4A65-87F2-36D756B38BAC.JPG' },
    { id: 26, category: 'sunsets', title: 'Family Silhouette', image: '/sunsets/BF9A890B-B55A-45F5-9B1C-E7595E87C79D.JPG' },
    { id: 27, category: 'sunsets', title: 'Mountain Sunset', image: '/sunsets/F10F5F8D-DD71-4FFF-B4FD-26AAB4CCC272.JPG' },
    { id: 28, category: 'sunsets', title: 'Palm Silhouette', image: '/sunsets/4496B258-C771-4855-940D-01264F556418.JPG' },
    { id: 29, category: 'sunsets', title: 'Golden Waves', image: '/sunsets/B1AA1DCB-3B37-4303-9A78-AAF19EBFA281.JPG' },
    { id: 30, category: 'sunsets', title: 'Misty Horizon', image: '/sunsets/8EED4BDF-C7B7-4B79-A4A4-FDC7DA72E6B1.JPG' },
    { id: 31, category: 'sunsets', title: 'Beach Gathering', image: '/sunsets/0312FC08-62B8-4C0F-B617-C26C475D7722.JPG' },
    { id: 32, category: 'sunsets', title: 'Lake Reflection', image: '/sunsets/A0B0BAC9-47E3-46F7-BCB0-1BDA4C1633A7.JPG' },
    { id: 33, category: 'sunsets', title: 'Dramatic Clouds', image: '/sunsets/97E1860B-8BD5-4C36-A159-D00D1E1F842F.JPG' },
    { id: 34, category: 'sunsets', title: 'Alpine Glow', image: '/sunsets/982742B2-7C91-4F52-936E-1D0AFCBE8D9C.JPG' },
    { id: 35, category: 'sunsets', title: 'Seabird Soaring', image: '/sunsets/AF74FF43-1FE7-4FA9-8628-91EDF8B27FDE.JPG' },
    { id: 36, category: 'sunsets', title: 'Framed Sun', image: '/sunsets/5ED829F8-91F3-4B44-BE8E-2F133A593B96.JPG' },
    { id: 37, category: 'sunsets', title: 'Bird in Flight', image: '/sunsets/E7057BE3-D4B5-4DD0-AB9C-A4D3FDCD2327.JPG' },
    { id: 38, category: 'world', title: 'Street Art', image: '/world/785733CF-8A3D-4D50-BEE3-7B6F37471950.JPG' },
    { id: 39, category: 'world', title: 'Sailing Trio', image: '/world/7235084A-752F-4861-A31B-9CFE920D6556.JPG' },
    { id: 40, category: 'world', title: 'Cigar & Watch', image: '/world/42273B98-7D0F-46C5-9A3E-A930D158D22B.JPG' },
    { id: 41, category: 'world', title: 'Havana Streets', image: '/world/DDA33FBB-5103-4F3C-A1FF-A0A35F32BADD.JPG' },
    { id: 42, category: 'world', title: 'Sea Lion', image: '/world/888573D7-BB62-40C0-9A07-2B80E753468B.JPG' },
    { id: 43, category: 'world', title: 'Urban Scene', image: '/world/2C9D7698-83E0-4AB8-B16F-BD45F783D64B.JPG' },
    { id: 44, category: 'world', title: 'City Life', image: '/world/3950CC97-C978-41B3-9D6A-6B4B953F42D1.JPG' },
    { id: 45, category: 'world', title: 'Travel Moments', image: '/world/799FAA2A-9B8C-428C-9A13-5646CBF05267.JPG' },
    { id: 46, category: 'world', title: 'Coastal View', image: '/world/ACCD5477-14CD-4771-99F9-07C690539B66.JPG' },
    { id: 47, category: 'world', title: 'Seaside', image: '/world/BECFE091-36E7-41E0-9BAB-6970A6FDF496.JPG' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-stone-50">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/alps/B0EFB1BF-4504-4AF2-BF1C-4F2AFF7AA9C2.JPG"
            alt="Swiss Alps"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-stone-50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-display text-white mb-4 leading-tight">
            <span className="italic">We don't remember days.</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl font-display text-white mb-4 leading-tight">
            <span className="italic">We remember moments.</span>
          </h2>
          <p className="text-xl text-white/90 font-light">
            Because in the end - IT'S ALL ABOUT THE VIBE ✨
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 font-light transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden cursor-pointer break-inside-avoid mb-4"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg font-light">No photos in this collection yet.</p>
          </div>
        )}
      </div>

      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl font-display text-gray-900 mb-4">
            Capture your own story
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Add the Photo Package to your private tour for 6–8 professionally edited photos delivered within 3 days.
          </p>
        </div>
      </section>
    </div>
  );
}
