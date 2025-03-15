<script setup lang="ts">

</script>

<template>
  <div class="mx-auto my-8 max-w-xl text-gray-300">
    <div class="flex flex-col gap-2">
      <!-- Step 1 -->
      <div class="w-full flex gap-2">
        <div class="flex flex-col gap-2">
          <UBadge color="neutral" variant="solid" class="rounded-full">
            1
          </UBadge>
          <USeparator class="h-full" orientation="vertical" size="xs" />
        </div>
        <div class="mt-0.5 w-full">
          <p>Select an archive.</p>
          <div class="my-8 space-y-2 text-gray-400">
            <UInput type="file" accept=".json" />
            <p class="text-sm">
              Please select a valid JSON file created from the export tab of the site.
            </p>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="w-full flex gap-2">
        <div class="flex flex-col gap-2">
          <UBadge color="neutral" variant="solid" class="rounded-full">
            2
          </UBadge>
          <USeparator class="h-full" orientation="vertical" size="xs" />
        </div>
        <div class="mt-0.5 w-full">
          <p>Select what you want to import.</p>
          <div class="my-8 space-y-4 w-full">
            <UCheckbox
              default-value
              label="Characters"
              description="Import characters without any weapons or echoes."
            />
            <UCheckbox
              default-value
              label="Weapons"
              description="Import weapons. Required if you want to import characters with their weapon."
            />
            <UCheckbox
              default-value
              label="Echoes"
              description="Import echoes. Required if you want to import characters with their echoes."
            />
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="w-full flex gap-2">
        <div class="flex flex-col gap-2">
          <UBadge color="neutral" variant="solid" class="rounded-full">
            3
          </UBadge>
          <USeparator class="h-full" orientation="vertical" size="xs" />
        </div>
        <div class="mt-0.5 w-full">
          <p>Configure the import options.</p>
          <div class="my-8 space-y-4 w-full">
            <UCheckbox
              label="Replace Weapons"
              description="Replace equiped weapons with those from the archive"
            />
            <UCheckbox
              label="Replace Echoes"
              description="Replace equiped echoes with those from the archive"
            />
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="w-full flex gap-2">
        <div class="flex flex-col gap-2">
          <UBadge color="neutral" variant="solid" class="rounded-full">
            4
          </UBadge>
          <USeparator class="h-full" orientation="vertical" size="xs" />
        </div>
        <div class="mt-0.5 w-full">
          <p>Import the data.</p>
          <div class="mt-8 space-y-2">
            <UButton color="neutral" variant="outline" label="Import" />
            <p class="text-gray-400 text-sm">
              Please ensure you have selected the correct options before proceeding.
            </p>
            <UProgress
              class="w-full mt-4"
              status
              :model-value="0"
              :max="['Waiting...', 'Characters...', 'Weapons...', 'Echoes...', 'Done!']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
