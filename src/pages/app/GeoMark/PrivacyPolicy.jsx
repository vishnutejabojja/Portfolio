import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div 
      className="privacy-policy-container" 
      style={{ 
        maxWidth: '850px', 
        margin: '0 auto', 
        padding: '40px 20px', 
        fontFamily: 'system-ui, -apple-system, sans-serif', 
        color: '#1f2937', 
        lineHeight: '1.6',
        textAlign: 'left'
      }}
    >
      <header style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0', color: '#111827' }}>Privacy Policy</h1>
        <p style={{ margin: '0', color: '#6b7280', fontWeight: '500' }}>Last Updated: July 2026</p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <p>
          GeoMark ("App," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our application.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>1. Information We Collect</h2>
        
        <h3 style={{ fontSize: '1.2rem', color: '#374151', marginTop: '20px' }}>Location Data</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>GPS Coordinates:</strong> When you stamp locations on maps, we collect precise GPS data from your device.</li>
          <li><strong>Usage:</strong> This data is utilized strictly to power the location stamping feature on your device.</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#374151', marginTop: '20px' }}>Photos & Media</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Camera Images:</strong> Photos you capture directly within the application.</li>
          <li><strong>Gallery Access:</strong> Photos you explicitly select from your device's storage to stamp.</li>
          <li><strong>Usage:</strong> Exclusively to attach visual context to your location stamps within the app.</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#374151', marginTop: '20px' }}>Device Information</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Device Details:</strong> Device model and operating system version for compatibility tracking and crash diagnostics.</li>
          <li><strong>App Usage:</strong> Anonymous feature utilization metrics to assist in software improvements.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>2. How We Use Your Information</h2>
        <p>We use your information <strong>exclusively to</strong>:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Enable location stamping functionality.</li>
          <li>Display maps with your marked locations.</li>
          <li>Save and manage your designated photos locally within the app.</li>
          <li>Identify bugs and optimize app performance.</li>
          <li>Deploy critical security updates.</li>
        </ul>
        
        <p style={{ marginTop: '15px' }}>We <strong>strictly prohibit</strong>:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Selling your personal data.</li>
          <li>Sharing your location data with third parties.</li>
          <li>Utilizing your photos for advertising.</li>
          <li>Tracking your activities for marketing purposes.</li>
          <li>Uploading your data to external servers without explicit, opt-in permission.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>3. Data Storage and Retention</h2>
        <h3 style={{ fontSize: '1.2rem', color: '#374151' }}>Local Storage</h3>
        <p>By default, the vast majority of your data resides securely on your personal device, including:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Location stamps</li>
          <li>Captured photos</li>
          <li>Map preferences and application settings</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#374151', marginTop: '20px' }}>Cloud Storage</h3>
        <p>Optional cloud backup features (where available) store encrypted data solely upon your explicit activation and permission.</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>4. Required Permissions</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6', textAlign: 'left' }}>
              <th style={{ padding: '12px', border: '1px solid #d1d5db' }}>Permission</th>
              <th style={{ padding: '12px', border: '1px solid #d1d5db' }}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}><strong>Location</strong></td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>To acquire current GPS coordinates for accurate map stamping.</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}><strong>Camera</strong></td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>To facilitate in-app photography.</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}><strong>Photo Library</strong></td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>To access user-selected existing photos.</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}><strong>Storage</strong></td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>To save offline maps and exported media.</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#4b5563' }}>
          <em>Note: You retain full control over these access rights. Navigate to <strong>Settings &gt; Apps &gt; GeoMark &gt; Permissions</strong> on your device to modify them at any time.</em>
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>5. Third-Party Services</h2>
        <p>GeoMark integrates with the following services to provide core functionality. Each operates under its respective privacy policy:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Google Play Services:</strong> Utilized for map rendering and geographic functionality.</li>
          <li><strong>Expo:</strong> Software development platform (does not process end-user personal data).</li>
          <li><strong>React Native:</strong> Foundational framework for the application.</li>
        </ul>
        <p><strong>Please note: We do not share your location or photo data with these infrastructure providers.</strong></p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>6. Data Sharing Practices</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6', textAlign: 'left' }}>
              <th style={{ padding: '12px', border: '1px solid #d1d5db' }}>Scenario</th>
              <th style={{ padding: '12px', border: '1px solid #d1d5db' }}>Do We Share?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>With advertising networks</td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>No</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>With analytics companies</td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>No (Anonymous crash reports only)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>With social media platforms</td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>No</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>By law enforcement or court order</td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>Only if strictly legally required</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>Explicit user-initiated sharing</td>
              <td style={{ padding: '12px', border: '1px solid #d1d5db' }}>Yes, at your discretion</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>7. Data Lifecycle and Deletion</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>On Your Device:</strong> Retained for the duration the app remains installed.</li>
          <li><strong>Upon Uninstallation:</strong> All local data is permanently purged from your device.</li>
          <li><strong>Server Backups:</strong> If enabled, data is retained until you manually delete the backup or disable the feature.</li>
        </ul>
        <div style={{ backgroundColor: '#f9fafb', padding: '15px', borderRadius: '6px', marginTop: '15px', border: '1px solid #e5e7eb' }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>To manually erase all data:</p>
          <ol style={{ margin: '0', paddingLeft: '20px' }}>
            <li>Open the GeoMark app.</li>
            <li>Navigate to <strong>Settings &gt; Data & Privacy &gt; Clear All Data</strong>.</li>
            <li>Confirm the deletion prompt.</li>
          </ol>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>8. Your Privacy Rights</h2>
        <p>As a user, you reserve the right to:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Access:</strong> Review the data stored within the app (via Settings &gt; Privacy).</li>
          <li><strong>Modify:</strong> Edit or update your information.</li>
          <li><strong>Erase:</strong> Delete any specific location stamp or photo at will.</li>
          <li><strong>Restrict:</strong> Deny or revoke any system permission request.</li>
          <li><strong>Export:</strong> Download a copy of your data (where applicable).</li>
          <li><strong>Terminate:</strong> Delete your account and all associated data permanently.</li>
        </ul>
        <p>To exercise these rights beyond the app's internal controls, please contact us at <strong>privacy@geomark.example.com</strong>.</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>9. Children's Privacy</h2>
        <p>
          GeoMark is not directed toward individuals under the age of 13. We do not knowingly collect personal information from children. If you are under 18, we require that you obtain parental or guardian consent prior to utilizing this application.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>10. Data Security Measures</h2>
        <p>We safeguard your information utilizing industry-standard practices, including:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Device-level encryption for locally stored data.</li>
          <li>Secure software development methodologies.</li>
          <li>Regular application security patches.</li>
        </ul>
        <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>
          <em>Disclaimer: No digital security protocol is infallible. We strongly advise users to keep their device operating systems updated to ensure maximum security.</em>
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>11. Region-Specific Disclosures</h2>
        
        <h3 style={{ fontSize: '1.2rem', color: '#374151' }}>European Union / EEA (GDPR)</h3>
        <p>Residents of the European Economic Area retain the right to access, rectify, erase, and port personal data, as well as restrict processing. Contact us directly to exercise these statutory rights.</p>

        <h3 style={{ fontSize: '1.2rem', color: '#374151', marginTop: '20px' }}>California Residents (CCPA)</h3>
        <p>California consumers have the right to request data disclosure, deletion, or to opt-out of the sale of personal information. As GeoMark does not sell personal data, the opt-out provision is inherently fulfilled.</p>

        <h3 style={{ fontSize: '1.2rem', color: '#374151', marginTop: '20px' }}>Global Jurisdictions</h3>
        <p>We are committed to operating in full compliance with the localized privacy frameworks of all regions where GeoMark is officially available.</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>12. Policy Modifications</h2>
        <p>
          We may revise this Privacy Policy periodically. Significant changes will be communicated via in-app notifications, and the "Last Updated" date will reflect the most recent revision. Continued use of the application constitutes acknowledgment and acceptance of the amended terms.
        </p>
      </section>

      <section style={{ marginBottom: '30px', backgroundColor: '#eff6ff', padding: '20px', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1e3a8a', marginTop: '0', borderBottom: '1px solid #bfdbfe', paddingBottom: '8px' }}>13. Executive Summary</h2>
        <p style={{ color: '#1e3a8a', margin: '0' }}>
          <strong>In brief:</strong> Your location data and photographs remain local to your device. We do not sell, distribute, or leverage your personal data for tracking purposes. You maintain absolute authority over the permissions granted to the application. Your privacy remains our utmost priority.
        </p>
      </section>

      <footer style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px', marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#111827' }}>Contact Information</h2>
        <p style={{ margin: '5px 0' }}><strong>Email:</strong> privacy@geomark.example.com</p>
        <p style={{ margin: '5px 0' }}><strong>Website:</strong> www.geomark.example.com</p>
        <p style={{ margin: '5px 0' }}><strong>Support:</strong> www.geomark.example.com/support</p>
        
        <p style={{ marginTop: '30px', fontSize: '0.85rem', color: '#6b7280', textAlign: 'left' }}>
          By continuing to use GeoMark, you acknowledge and agree to this Privacy Policy.<br/>
          &copy; {new Date().getFullYear()} GeoMark. All rights reserved.
        </p>
      </footer>
    </div>
  );
}